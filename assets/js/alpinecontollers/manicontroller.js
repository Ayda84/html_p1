document.addEventListener('alpine:init', () => {
    Alpine.data('mainData', () => (
        {
      
        massage: 'I love programming',
         names: ['ayda','donya','sara'], 
         testFunc(){
              alert(this.massage)
          }

    }))
})