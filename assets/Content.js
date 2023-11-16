const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb( ${red}, ${green}, ${blue} )`;
    return color;
}
var UserAccount = [
    {
        name: 'Varun Sharma',
        email: 'varun@gmail.com',
        status: 'LoggedIn',
        company: 'GHRIETN',
        vendor: 'Viplao Itankar',
        color: randomColor(),
    }
];
var HomeContent = [
    {
        color: randomColor(),
        name: 'Yash',
        company: 'GHRIETN',
        attempts: 1,
        abatz: 'abatz',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: '1234567890',
        messages: [
            {
                message:'Hey, I am interested in your project',
                time:'08-11-2023 23:23:23',
                mode:'received'
            },
            {
                message:'I will send you details',
                time:'08-11-2023 23:23:23',
                mode:'sent'
            },
        ],
        history: [
            {
                type:'task',
                change : 'Today, 12:14 PM',
                Task_Remainder_Time : 'Today, 6:14 PM',
                Task_Due_Date : '22 March',
                note:'chck for feedback n demo'
            },
            {
                type:'call',
                Duration : '00:00',
                time : 'Today, 6:14 PM',
            },
            {
                type:'task',
                change : 'Today, 12:14 PM',
                Task_Remainder_Time : 'Today, 6:14 PM',
                Task_Due_Date : '22 March',
                note:'chck for feedback n demo'
            },
            {
                type:'task',
                change : 'Today, 12:14 PM',
                Task_Remainder_Time : 'Today, 6:14 PM',
                Task_Due_Date : '22 March',
                note:'chck for feedback n demo'
            }
        ],
    },
    {
        color: randomColor(),
        name: 'Vaishnavi',
        company: 'GHRIETN',
        attempts: 1,
        abatz: 'abatz',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: '6841874628',
        messages: [
            {
                message:'Hey, I am interested in your project',
                time:'08-11-2023 23:23:23',
                mode:'received'
            }
        ],
        history: [
            {
                type:'task',
                change : 'Today, 12:14 PM',
                Task_Remainder_Time : 'Today, 6:14 PM',
                Task_Due_Date : '22 March',
                note:'chck for feedback n demo'
            },
            {
                type:'call',
                Duration : '00:00',
                time : 'Today, 6:14 PM',
            },
            {
                type:'task',
                change : 'Today, 12:14 PM',
                Task_Remainder_Time : 'Today, 6:14 PM',
                Task_Due_Date : '22 March',
                note:'chck for feedback n demo'
            },
            {
                type:'task',
                change : 'Today, 12:14 PM',
                Task_Remainder_Time : 'Today, 6:14 PM',
                Task_Due_Date : '22 March',
                note:'chck for feedback n demo'
            }
        ],
    },
    {
        color: randomColor(),
        name: 'Sakshi',
        company: 'GHRIETN',
        attempts: 1,
        abatz: 'abatz',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: '9422686346',
        messages: [
            {
                message:'Hey, I am interested in your project',
                time:'08-11-2023 23:23:23',
                mode:'received'
            }
        ],
        history: [
            {
                type:'task',
                change : 'Today, 12:14 PM',
                Task_Remainder_Time : 'Today, 6:14 PM',
                Task_Due_Date : '22 March',
                note:'chck for feedback n demo'
            },
            {
                type:'call',
                Duration : '00:00',
                time : 'Today, 6:14 PM',
            },
            {
                type:'task',
                change : 'Today, 12:14 PM',
                Task_Remainder_Time : 'Today, 6:14 PM',
                Task_Due_Date : '22 March',
                note:'chck for feedback n demo'
            },
            {
                type:'task',
                change : 'Today, 12:14 PM',
                Task_Remainder_Time : 'Today, 6:14 PM',
                Task_Due_Date : '22 March',
                note:'chck for feedback n demo'
            }
        ],
    },
];

export { HomeContent, UserAccount }