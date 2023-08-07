import { count_func_facutly, count_func_study_basic,count_func_english,count_func_math_ai,count_func_PD_Basics } from "./array-acquisition.js";

document.addEventListener('DOMContentLoaded',function(){
  setTimeout(() =>{
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels:["履修状況"],
        datasets: [
          {
              label:"修学基礎",
              data:[count_func_study_basic()],
              backgroundColor:"#4f81bd"
          },
          {
              label:"英語",
              data:[count_func_english()],
              backgroundColor:"#c0504d"
          },
          {
              label:"数理・DS・AI",
              data:[count_func_math_ai()],
              backgroundColor:"#9bbb59"
          },
          {
              label:"PD基礎",
              data:[count_func_PD_Basics()],
              backgroundColor:"#8064a2"
          },
          {
            label: "専門科目",
            data: [count_func_facutly()],
            backgroundColor:"#4baccd"
        },
      ],
        },
        options: {
          responsive: false,
          scales: {
              xAxes: [
                  {
                      stacked: true  // 積み上げの指定
                  }
              ],
              yAxes: [
                  {
                      stacked: true  //  積み上げの指定
                  }
              ]
          }
        }
      });
  }, 300);
});