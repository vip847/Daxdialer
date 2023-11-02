const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb( ${red}, ${green}, ${blue} )`;
    return color;
}
const UserAccount = [
    {
        name: 'Viplao Subhash Itankar',
        email: 'viplaov@gmail.com',
        status: 'LoggedIn',
        company: 'Revat Network',
        vendor: 'Pooja Arora',
        color: randomColor(),
    }
];
const HomeContent = [
    {
        color: randomColor(),
        name: 'Sakshi Donadkar',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: 9422686346,
    },
    {
        color: randomColor(),
        name: 'Vaishnavi Dhage',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: 9422686346,
    },
    {
        color: randomColor(),
        name: 'Varun Sharma',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: 9422686346,
    },
    {
        color: randomColor(),
        name: 'Viplao Itankar',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: 9422686346,
    },
    {
        color: randomColor(),
        name: 'Yash Chhenniya',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: 9422686346,
    },
    {
        color: randomColor(),
        name: 'Yash Kawle',
        interest: 'Interested',
        event: 'Followup call @ Tommorow, 10:00 AM',
        time: 'Today, 6:14 PM',
        contact: 9422686346,
    },
];
const MessageContent = [
    {
        id: '1',
        sender: 'Sakshi Donadkar',
        time: '2 mins ago',
        message: 'Hey, I am interested in your project',
    },
    {
        id: '2',
        sender: 'Vaishnavi Dhage',
        time: '6 mins ago',
        message: 'Hey, I am interested in your project',

    },
    {
        id: '3',
        sender: 'Varun Sharma',
        time: '12 mins ago',
        message: 'Hey, I am interested in your project',

    },
    {
        id: '4',
        sender: 'Viplao Itankar',
        time: '20 mins ago',
        message: 'Hey, I am interested in your project',

    },
    {
        id: '5',
        sender: 'Yash Chhenniya',
        time: '45 mins ago',
        message: 'Hey, I am interested in your project',

    },
    {
        id: '6',
        sender: 'Yash Kawle',
        time: '1 hour ago',
        message: 'Hey, I am interested in your project',

    },
    {
        id: '7',
        sender: 'Raj Arora',
        time: '2 hours ago',
        message: 'Hey, I am interested in your project',
    },
    {
        id: '8',
        sender: 'Pooja Arora',
        time: '4 hours ago',
        message: 'Hey, I am interested in your project',
    }
];


export { HomeContent, UserAccount, MessageContent, randomColor }