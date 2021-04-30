const themeSwitcher = document.querySelector('#themeSwitcher')

navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position);
})




const setTheme=(theme)=>{
    // Theme-Light ; theme-Dark
    theme=theme || 'theme-light';
    document.documentElement.className=theme;
    localStorage.setItem('theme',theme);
    themeSwitcher.value=theme;
}

const defaultTheme=localStorage.getItem('theme')  || 'theme-light';
setTheme(defaultTheme);
themeSwitcher.addEventListener('change',(e)=>{
    setTheme(e.target.value);
})