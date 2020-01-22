const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

addTime.onclick = () => {
    const dateTime = new Date();

    const date = dateTime.getDate();
    const month = months[dateTime.getMonth()];
    const year = dateTime.getFullYear();

    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();
    const second = dateTime.getSeconds();

    const day = days[dateTime.getDay()];
    const fullDate = `${date} ${month} ${year}`;
    const time = `${hour}:${minute}:${second}`;

    const activity = {
        day,
        fullDate,
        time
    }

    axios.post('http://localhost:8000/api/activity', activity)
        .then(function (response) {
            console.log(response);
            getAllActivities();
        })
        .catch(function (error) {
            console.log(error);
        });
}


const getAllActivities = () => {
    axios.get('http://localhost:8000/api/activities')
        .then(function (response) {
            activities.innerHTML = '';
            response.data.forEach(item => {
                const listItem = document.createElement("LI");
                listItem.innerHTML = item.time;
                activities.appendChild(listItem);
            })
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

getAllActivities();