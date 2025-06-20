document.addEventListener("DOMContentLoaded", starFn);


function starFn()
{
      console.log("모든 돔 구조가 로드 되었습니다.");

      let menu = document.querySelectorAll("nav ul li");
      //console.log(menu);

      let contents = document.querySelectorAll(".animationTop");
      //console.log(contents);

      let scrollPos = 0;
      let targetScrollPos;
      let nowScrollPos = scrollY; // pageOffset;

      let scrollAni;

      window.addEventListener("scroll", scrollFn);
     
      function scrollFn()
      {
            nowScrollPos = scrollY;
            scrollPos = nowScrollPos;
      }

      for(let i = 0; i < menu.length; i++)
      {
            menu[i].addEventListener("click",
                  function()
                  {
                        let index = this.getAttribute("clickNum");
                       // console.log(index);

                        targetScrollPos = contents[index].offsetTop;
                        //console.log(targetScrollPos);

                        scrollAni = requestAnimationFrame(moveTo);
                  }
            );
      }


      function moveTo()
      {
            scrollPos += (targetScrollPos - nowScrollPos) * 0.1;
            window.scroll(0, scrollPos);

            if( Math.abs(targetScrollPos - nowScrollPos) <= 1 ){
                  window.scroll(0, targetScrollPos);
                  cancelAnimationFrame(scrollAni);
            }
            else
            {
                  scrollAni = requestAnimationFrame(moveTo);
            }

           
      }

}