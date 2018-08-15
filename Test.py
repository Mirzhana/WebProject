#! /usr/bin/env python
# -*- coding: utf-8 -*-
import requests
import json
import sys  
reload(sys)
sys.setdefaultencoding('utf-8')

assign_url="https://api.chat2desk.kz/v1/tags/assign_to"


headers = {
    'Authorization': "087436a345b8f793afdd363e2c3e96",
    'Content-Type': "application/json",
    }
choose_lang_msg = "Жалғастыру үшін тілді таңдауыңызды сұраймыз. Для продолжения, пожалуйста, выберите язык:\
\n3 – Қазақ\
\n4 – Русский"

age_approve_msg = "Сәлеметсіз бе, Сіз IQOS қолдау қызметіне хабарластыңыз. Жалғастыру үшін 18 жаста немесе одан асқаныңызды және темекі тұтынушысы екеніңізді растауыңызды сұраймыз. Здравствуйте, вы обратились в службу поддержки IQOS. Для продолжения, подтвердите, пожалуйста, что вам исполнилось 18 или более лет и вы являетесь потребителем табака.\
    \n1 – Иә/Да\
    \n2 – Жоқ/Нет"

#RU operators group = 23 KZ opoerators group = 24
class Handler:
    def new_message_handler(self, input_data, c2d):
        
        #Нужные переменные
        message_id = input_data['message']['id']
        client_id = input_data['client']['id']
        dialog_id = input_data['message']['dialogID'] 
        client_message = input_data['message']['text']
        online_status = c2d.get_company_info()['online']
        dialogs = c2d.get_client_dialogs(client_id)
        online_operators = c2d.get_online_operators(True)
        online_operators_list=[]
        for i in range(len(online_operators)):
            online_operators_list.append(online_operators[i]['id'])
        operators = c2d.get_operators() #All operators
        checker = None
        checker_kz_online = None
        checker_ru_online = None
        
        
        
        transfer_to_group_url = 'https://api.chat2desk.kz/v1/messages/'+str(message_id)+'/transfer_to_group?group_id='

        #Находим текущие тэги клиента и делаем лист из их id
        client_tags = requests.get('https://api.chat2desk.kz/v1/clients/'+ str(client_id),  headers=headers).json()
        client_tags_id_list=[]
        for i in range (len(client_tags['data']['tags'])):
            client_tags_id_list.append(client_tags['data']['tags'][i]['id'])
        
        #Тэги для присваивания
        tag970 = "{ \"tag_ids\": [970], \"assignee_type\": \"client\",\"assignee_id\": \""+str(client_id)+"\" }" #rus
        tag971 = "{ \"tag_ids\": [971], \"assignee_type\": \"client\",\"assignee_id\": \""+str(client_id)+"\" }" #kaz
        tag973 = "{ \"tag_ids\": [973], \"assignee_type\": \"client\",\"assignee_id\": \""+str(client_id)+"\" }" #ageApproved
        tag976 = "{ \"tag_ids\": [976], \"assignee_type\": \"client\",\"assignee_id\": \""+str(client_id)+"\" }" #1st message sent
        tag977 = "{ \"tag_ids\": [977], \"assignee_type\": \"client\",\"assignee_id\": \""+str(client_id)+"\" }" #2nd message sent
        tag960 = "{ \"tag_ids\": [960], \"assignee_type\": \"client\",\"assignee_id\": \""+str(client_id)+"\" }" #CSAT
        tag978 = "{ \"tag_ids\": [978], \"assignee_type\": \"client\",\"assignee_id\": \""+str(client_id)+"\" }" #HelloName message sent
        tag979 = "{ \"tag_ids\": [979], \"assignee_type\": \"client\",\"assignee_id\": \""+str(client_id)+"\" }" #Waiting message sent
        
        #Возможные ответы клиента на вопросы
        approving_answers = [u"Да", u"да", u"Подтверждаю", u"подтверждаю", u"Иә", u"иә", u"Растаймын",u"растаймын",u"1"]
        ru_lang_answers = [u"Русский", u"русский", u"Орыс", u"Орысша",u"4"]
        kz_lang_answers = [u"Казахский", u"казахский", u"Қазақ", u"қазақ", u"қазақша",u"3"]
        
        operators_groups =requests.get('https://api.chat2desk.kz/v1/operators_groups/',  headers=headers).json()
 
        kz_operators_list = operators_groups['data'][1]['operator_ids']

        ru_operators_list = operators_groups['data'][0]['operator_ids']
        
        #Определить есть ли онлайн операторы в группах кз и рус
        if len(online_operators_list)>len(kz_operators_list):
            for j in range(len(online_operators_list)):
                for i in range(len(kz_operators_list)):
                    if online_operators_list[j]==kz_operators_list[i]:
                        checker_kz_online = True
                        
        else:
            for i in range(len(kz_operators_list)):
                for j in range(len(online_operators_list)):
                    if kz_operators_list[i]==online_operators_list[j] :
                        checker_kz_online = True
            
        if len(online_operators_list)>len(ru_operators_list):
            for j in range(len(online_operators_list)):
                for i in range(len(ru_operators_list)):
                    if online_operators_list[j]==ru_operators_list[i]:
                        checker_ru_online = True
        else:
            for i in range(len(ru_operators_list)):
                for j in range(len(online_operators_list)):
                    if ru_operators_list[i]==online_operators_list[j]:
                        checker_ru_online = True
                 
        #If company is Online:
        if online_status is True:
            
            #for CSAT tag assign
            if 959 not in client_tags_id_list:
                response = requests.request("POST",assign_url, data=tag960, headers=headers)
                
            #if client not approved:
            if 973 not in client_tags_id_list:
                if 976 not in client_tags_id_list: #if age message not sent
                    c2d.send_message(client_id, age_approve_msg, 'autoreply')
                    response = requests.request("POST", assign_url, data=tag976, headers=headers)
                else:
                    if client_message in approving_answers: #if answer is Yes
                        response = requests.request("POST", assign_url, data=tag973, headers=headers)
                        if 977 not in client_tags_id_list: #if language message not sent
                            c2d.send_message(client_id, choose_lang_msg, 'autoreply')
                            response = requests.request("POST", assign_url, data=tag977, headers=headers)
                    else:
                        c2d.send_message(client_id, age_approve_msg, 'autoreply')
                        
            else:
                #Старый клиент у которого есть тэг Русского языка и аппрува
                if 970 in client_tags_id_list:
                    if len(dialogs) > 0:
                        if dialog_id is None:
                            for i in range(len(online_operators)):
                                if str(dialogs[0]['operator_id']) in str(online_operators[i]['id']):
                                    c2d.transfer_message(input_data['message']['id'], dialogs[0]['operator_id'])
                                    checker = True
                                    for i in range(len(operators)):
                                        if operators[i]['id'] == dialogs[0]['operator_id']:
                                            operator = operators[i]['first_name']
                                            if dialog_id is None:
                                                c2d.send_message(client_id,u'Здравствуйте! Меня зовут '+ str(operator)+ u". Чем я могу вам помочь?", 'autoreply')
                                    
                            if checker is not True:
                                if checker_ru_online is True:
                                    transfer = requests.get(transfer_to_group_url+'23', headers=headers).json()
                                else:
                                    c2d.send_message(client_id, u"Извините, в данный момент все операторы заняты. Мы ответим на ваше обращение в ближайшее время.", 'autoreply')
                                    
                                if transfer['status'] == 'success':
                                    for i in range(len(operators)):
                                        if operators[i]['id'] == transfer['data']['assignee']['id']:
                                            operator = operators[i]['first_name']
                                            if dialog_id is None:
                                                c2d.send_message(client_id,u'Здравствуйте! Меня зовут '+ str(operator)+ u". Чем я могу вам помочь?", 'autoreply')
                                else:
                                    c2d.send_message(client_id, u"Извините, в данный момент все операторы заняты. Мы ответим на ваше обращение в ближайшее время.", 'autoreply')
                                
                    else:
                        transfer = requests.get(transfer_to_group_url+'23', headers=headers).json()
                        if transfer['status'] == 'success':
                            for i in range(len(operators)):
                                if operators[i]['id'] == transfer['data']['assignee']['id']:
                                    operator = operators[i]['first_name']
                                    if dialog_id is None:
                                        c2d.send_message(client_id,u'Здравствуйте! Меня зовут '+ str(operator)+ u". Чем я могу вам помочь?", 'autoreply')
                        else:
                            c2d.send_message(client_id, u"Извините, в данный момент все операторы заняты. Мы ответим на ваше обращение в ближайшее время.", 'autoreply')
                #Старый клиент у которого есть тэг Казахского языка и аппрува
                if 971 in client_tags_id_list:
                    if dialog_id is None:
                        if len(dialogs) > 0:
                            for i in range(len(online_operators)):
                                if str(dialogs[0]['operator_id']) in str(online_operators[i]['id']):
                                    c2d.transfer_message(input_data['message']['id'], dialogs[0]['operator_id'])
                                    checker = True
                                    for i in range(len(operators)):
                                        if operators[i]['id'] == dialogs[0]['operator_id']:
                                            operator = operators[i]['first_name']
                                            if dialog_id is None:
                                                c2d.send_message(client_id,u"Cәлеметсіз бе! Менің  атым " +str(operator)+u". Сізге қалай көмектесе аламын?", 'autoreply')
                                    
                            if checker is not True:
                                transfer = requests.get(transfer_to_group_url+'24', headers=headers).json()
                                if transfer['status'] == 'success':
                                    for i in range(len(operators)):
                                        if operators[i]['id'] == transfer['data']['assignee']['id']:
                                            operator = operators[i]['first_name']
                                            if dialog_id is None:
                                                c2d.send_message(client_id,u"Cәлеметсіз бе! Менің  атым " +str(operator)+u". Сізге қалай көмектесе аламын?", 'autoreply')
                                else:
                                    c2d.send_message(client_id, u"Кешіріңіз, осы сәтте барлық операторлардың қолы бос емес. Сізге жақын арада жауап береміз.", 'autoreply')
                                    
                        else:
                            if checker_kz_online is True:
                                transfer = requests.get(transfer_to_group_url+'24', headers=headers).json()
                            else:
                                c2d.send_message(client_id, u"Кешіріңіз, осы сәтте барлық операторлардың қолы бос емес. Сізге жақын арада жауап береміз.", 'autoreply')
                            if transfer['status'] == 'success':
                                for i in range(len(operators)):
                                    if operators[i]['id'] == transfer['data']['assignee']['id']:
                                        operator = operators[i]['first_name']
                                        if dialog_id is None:
                                            c2d.send_message(client_id,u"Cәлеметсіз бе! Менің  атым " +str(operator)+u". Сізге қалай көмектесе аламын?", 'autoreply')
                            else:
                                c2d.send_message(client_id, u"Кешіріңіз, осы сәтте барлық операторлардың қолы бос емес. Сізге жақын арада жауап береміз.", 'autoreply')
                #Есть апрув но язык не выбран
                else:
                    if 977 not in client_tags_id_list:
                        c2d.send_message(client_id, choose_lang_msg, 'autoreply')
                        response = requests.request("POST", assign_url, data=tag977, headers=headers)
                    else:
                        if client_message in ru_lang_answers:
                            if checker_ru_online is True:
                                transfer = requests.get(transfer_to_group_url+'23', headers=headers).json()
                            else:
                                c2d.send_message(client_id, u"Извините, в данный момент все операторы заняты. Мы ответим на ваше обращение в ближайшее время.", 'autoreply')
                                
                            response = requests.request("POST",assign_url, data=tag970, headers=headers)
                            if transfer['status'] == 'success':
                                for i in range(len(operators)):
                                    if operators[i]['id'] == transfer['data']['assignee']['id']:
                                        operator = operators[i]['first_name']
                                        if dialog_id is None:
                                            c2d.send_message(client_id,u'Здравствуйте! Меня зовут '+ str(operator)+ u". Чем я могу вам помочь?", 'autoreply')
                            else:
                                c2d.send_message(client_id, u"Извините, в данный момент все операторы заняты. Мы ответим на ваше обращение в ближайшее время.", 'autoreply')

                        elif client_message in kz_lang_answers:
                            response = requests.request("POST",assign_url, data=tag971, headers=headers)
                            if checker_kz_online is True:
                                transfer = requests.get(transfer_to_group_url+'24', headers=headers).json()
                            else:
                                c2d.send_message(client_id, u"Кешіріңіз, осы сәтте барлық операторлардың қолы бос емес. Сізге жақын арада жауап береміз.", 'autoreply')
                                
                            
                            if transfer['status'] == 'success':
                                for i in range(len(operators)):
                                    if operators[i]['id'] == transfer['data']['assignee']['id']:
                                        operator = operators[i]['first_name']
                                        if dialog_id is None:
                                            c2d.send_message(client_id,u"Cәлеметсіз бе! Менің  атым " +str(operator)+u". Сізге қалай көмектесе аламын?", 'autoreply')
                            else:
                                c2d.send_message(client_id, u"Кешіріңіз, осы сәтте барлық операторлардың қолы бос емес. Сізге жақын арада жауап береміз.", 'autoreply')
                        

                            
                
    # def before_sending_message_handler(self, input_data, c2d):
        

#   #
#   # after closing dialog handler
#   #
#     def after_closing_dialog_handler(self, input_data, c2d):
#         return '[after_closing_dialog] do logic here'

#   #
#   # before closing dialog handler
#   #
#     def before_closing_dialog_handler(self, input_data, c2d):
#         return '[after_closing_dialog] do logic here'

#   #
#   # auto checking handler
#   #
#     def auto_checking_handler(self, input_data, c2d):
#         return '[auto_checking] do logic here'
#         return '[after_closing_dialog] do logic here'

#   #
#   # after scanning QR-code handler
#   #
#     def qr_code_result_handler(self, input_data, c2d):
#         return '[qr_code_result] do logic here'

#   #
#   # after manually call
#   #
#     def manually_handler(self, input_data, c2d):
#         return '[manually] do logic here'

#   #
#   # after chat bot don't triggered
#   #
#     def chat_bot_not_triggered_handler(self, input_data, c2d):
#         return '[manually] do logic here'

#   #
#   # dialog transfer handler
#   #
#     def dialog_transfer_handler(self, input_data, c2d):
#         return '[dialog_transfer] do logic here'

# examples
# send message
#response = c2d.send_message(94212, 'test!!!')

# send question
#response = c2d.send_question(94212, 4321)

# get client info
#response = c2d.get_client_info(94212)

# get operators
#response = c2d.get_operators()

# get online operators
#response = c2d.get_online_operators()

# get list of question
#response = c2d.get_questions(5369, '10-10-2015', '10-10-2016')

# get last question
# response = c2d.get_last_question(5369)

# get unanswered dialogs
#response = c2d.get_unanswered_dialogs(18000)

# transfer dialog
#response = c2d.transfer_dialog(81984, 1899)

# get last message id in dialog
# dialog_id = 100
# type = 2 (1-client, 2-operator, 3-auto, 4-system)
# 2*24*60*60 time ago
#response = c2d.get_last_message_id(100, 2, 2*24*60*60)

# operator groups_ids
# operator_id = 81984
#response = c2d.get_operator_group_ids(81984)

# check if operator in group
# operator_id = 81984
# group_id = 81984
#response = c2d.operator_in_group(81984, 100)

# not send menu in new_message_handler add
# print 'not send menu'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
