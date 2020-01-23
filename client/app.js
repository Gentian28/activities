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

const generateCard = (fullDate, day, time) => {
    let timeList = '';
    for (let i = 0; i < time.length; i++) {
        timeList += `<li class="collection-item">${time[i]}</li>`;
    }
    return `<li class="col s12 m4">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">${fullDate}</span>
                        <p>${day}</p>
                        <ul class="collection">
                            ${timeList}
                        </ul>
                        <p>Times: ${time.length}</p>
                    </div>
                </div>
            </li>`;
}

const getAllActivities = () => {
    axios.get('http://localhost:8000/api/activities')
        .then(function (response) {
            let act = '';
            response.data.forEach(item => {
                const listItem = generateCard(item.fullDate, item.day, item.time);
                act += listItem;
            })
            activities.innerHTML = act;
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

getAllActivities();