var app = new Vue({
  el: '#myBoolZap',

  data:{
        active:'hiddenClass',
        idxConct: 0,
        userMessage:'',
        idxMessages:0,

        autoAnswer:[
          'ooookkk',
          'ciao amico mio',
          'si può fare dai',
          'fammici pensare un attimo',
          'credo di no',
          'lo so ti rispondo sempre alla stessa maniera'],

          idxRandomAnsw :0,
          inputSearchingContacts:'',

          idxSearchContacts:0,


    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ],



    },

    methods:{
      getContactsDate:function(){
        let date = new Date();
        let dateString = date.toLocaleString();
        dateString= dateString.replace(',','')
        return dateString;
      },


      // risposte random
      randomAutoAnswer:function(){
        this.idxRandomAnsw = this.autoAnswer.length
        let result = Math.floor((Math.random() * this.idxRandomAnsw));
        return this.autoAnswer[result];
      },


      showContactMessages:function(index){
        this.idxConct = index;
      },


      // metodo con il quale stampo i messaggi scritti nell'input bar
      userMessageSend:function(){
        const message = {
          date: this.getContactsDate(),
          text: this.userMessage,
          status: 'sent'
        }
        this.contacts[this.idxConct].messages.push(message)
      },


      // risposta automatica dopo 1 secondo
      contactAnswer:function(){
        const message = {
          date: this.getContactsDate(),
          text: this.randomAutoAnswer(),
          status: 'received'
        }
        let that=this;
        setTimeout(function(){
          that.contacts[that.idxConct].messages.push(message)
        },1000)

      },

       searchingContacts:function(){

         this.contacts.forEach((item, i) => {
           if (item.name.toLowerCase().includes(this.inputSearchingContacts.toLowerCase())) {
             item.visible = true;
           }
           else {
             item.visible = false;

           }

         });
       this.inputSearchingContacts = ''

     },

     dropDownMenu:function(){

      if (this.active === 'hiddenClass') {
        this.active = 'showClass'
      }else {
        this.active = 'hiddenClass'
      }

    },

  // ultimo accesso contact
    lastAccessContact:function(idx){

       let messages = this.contacts[idx].messages
       let lastMsg = messages.length - 1;
      let lastdate = messages[lastMsg].date;
       return lastdate;


    },


    removeFromMessages:function(){

    let message = this.contact[this.idxConct].messages;
    let that = this
    let remove = message.filter((element,index) =>{
    return that.idxMessages = index;
      console.log(idxMessages);
    })

    },

  }

  });





  Vue.config.devtools = true;
