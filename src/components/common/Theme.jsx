import { useEffect, useState } from 'react';

const Theme = () => {
    const [theme, setTheme] = useState('light'); // السمة الافتراضية هي 'light'

    // تغيير السمة بين 'light' و 'dark'
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // تطبيق السمة على عنصر HTML عند تغيرها
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="theme-toggle position-fixed top-50 end-0">
            <button className="theme-btn" onClick={toggleTheme}>
                {theme === 'light' ? (
                    <i className="fa-solid fa-moon"></i>
                ) : (
                    <i className="fa-regular fa-moon"></i>
                )}
            </button>
        </div>

    );
};

export default Theme;
