const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb( ${red}, ${green}, ${blue} )`;
    return color;
}
const UserAccount = [
    {
        name: 'Varun Sharma',
        email: 'varun@gmail.com',
        status: 'LoggedIn',
        company: 'GHRIETN',
        vendor: 'Viplao Itankar',
        color: randomColor(),
    }
];
const HomeContent = [
    {
        color: randomColor(),
        name: 'Yash',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: 1234567890,
    },
    {
        color: randomColor(),
        name: 'Vaishnavi',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: 684187462,
    },
    {
        color: randomColor(),
        name: 'Sakshi',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: 9422686346,
    },
];

const MessageContent = [
    {
        id: '1',
        sender: 'Yash',
        time: '2 mins ago',
        message: 'Hey, I am interested in your project',
    },
    {
        id: '2',
        sender: 'Vaishnavi',
        time: '6 mins ago',
        message: 'Hey, I am interested in your project',

    },
    {
        id: '3',
        sender: 'Sakshi',
        time: '12 mins ago',
        message: 'Hey, I am interested in your project',

    }
];

const ContactContent = [
    {
        color: randomColor(),
        name: 'Yash',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: 1234567890,
    },
    {
        color: randomColor(),
        name: 'Vaishnavi',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: 684187462,
    },
    {
        color: randomColor(),
        name: 'Sakshi',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: 9422686346,
    },
];

export { HomeContent, UserAccount, MessageContent, randomColor, ContactContent }