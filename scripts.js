(function () {
    const days = document.getElementById('days')
    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')

    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "12/22/",
        startDate = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    const countDown = new Date(startDate).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            days.innerText = Math.floor(distance / (day)),
            hours.innerText = Math.floor((distance % (day)) / (hour)),
            minutes.innerText = Math.floor((distance % (hour)) / (minute)),
            seconds.innerText = Math.floor((distance % (minute)) / second);
  
          if (distance < 0) {

            const timerContainer = document.getElementById('timerContainer');

            /*
                DEAREST READER: 
                Wilt thou be so pleased to be informed, that the contents contained hereafter are not final, but are nontheless
                made for the enjoyment of the creators and the members of this esteemed Moonlit Council.

                A THREAT LEVEL MOONLIGHT should not be of concern to any person under the whole canopy of heaven.

                "And this, our life, exempt from public haunt, finds tongues in trees, books in the running brooks, sermons in stones, and good in everything."
            */


            clearInterval(x);
          }
        }, 0)

    //    const threatContainer = document.getElementById('threatContainer');

    //    threatContainer.innerHTML = `
    //         <iframe style="position: fixed; top: 0; left: 0; z-index: 10000; width: 100vw; height: 100vh; opacity: .1;" src="https://www.youtube.com/embed/QwATaVrZhpI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    //     `

    }());
