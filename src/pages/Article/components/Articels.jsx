import '../../../styles/article.css';

const articles = [
    {
        id: 1,
        title: "أساسيات لغة JavaScript وكيفية استخدامها في تطوير الويب التفاعلي",
        smallDescription: "لغة JavaScript هي واحدة من أكثر لغات البرمجة انتشارًا واستخدامًا في تطوير الويب. في هذا المقال، سنستعرض كيفية استخدامها في إنشاء صفحات ويب تفاعلية وديناميكية.",
        image: 'https://miro.medium.com/v2/resize:fit:522/1*NJSv6DGoKTloI8d8im98zg.png',
        author: "محمد أحمد",
        date: "2024-09-04"
    },
    {
        id: 2,
        title: "أساسيات لغة JavaScript وكيفية استخدامها في تطوير الويب التفاعلي",
        smallDescription: "لغة JavaScript هي واحدة من أكثر لغات البرمجة انتشارًا واستخدامًا في تطوير الويب. في هذا المقال، سنستعرض كيفية استخدامها في إنشاء صفحات ويب تفاعلية وديناميكية.",
        image: 'https://miro.medium.com/v2/resize:fit:522/1*NJSv6DGoKTloI8d8im98zg.png',
        author: "محمد أحمد",
        date: "2024-09-04"
    },
    {
        id: 3,
        title: "أساسيات لغة JavaScript وكيفية استخدامها في تطوير الويب التفاعلي",
        smallDescription: "لغة JavaScript هي واحدة من أكثر لغات البرمجة انتشارًا واستخدامًا في تطوير الويب. في هذا المقال، سنستعرض كيفية استخدامها في إنشاء صفحات ويب تفاعلية وديناميكية.",
        image: 'https://miro.medium.com/v2/resize:fit:522/1*NJSv6DGoKTloI8d8im98zg.png',
        author: "محمد أحمد",
        date: "2024-09-04"
    },
    {
        id: 4,
        title: "أساسيات لغة JavaScript وكيفية استخدامها في تطوير الويب التفاعلي",
        smallDescription: "لغة JavaScript هي واحدة من أكثر لغات البرمجة انتشارًا واستخدامًا في تطوير الويب. في هذا المقال، سنستعرض كيفية استخدامها في إنشاء صفحات ويب تفاعلية وديناميكية.",
        image: 'https://miro.medium.com/v2/resize:fit:522/1*NJSv6DGoKTloI8d8im98zg.png',
        author: "محمد أحمد",
        date: "2024-09-04"
    },
    {
        id: 5,
        title: "أساسيات لغة JavaScript وكيفية استخدامها في تطوير الويب التفاعلي",
        smallDescription: "لغة JavaScript هي واحدة من أكثر لغات البرمجة انتشارًا واستخدامًا في تطوير الويب. في هذا المقال، سنستعرض كيفية استخدامها في إنشاء صفحات ويب تفاعلية وديناميكية.",
        image: 'https://miro.medium.com/v2/resize:fit:522/1*NJSv6DGoKTloI8d8im98zg.png',
        author: "محمد أحمد",
        date: "2024-09-04"
    }
];


const Articles = () => {
    return (
        <div className="container my-4">
            <div className="title-section">
                <h2> المقالات</h2>
            </div>
            <div className="row g-5 my-2">
                <div className="col-12 mb-4">
                    <div className="artical shadow d-flex align-items-center p-3 rounded-3">
                        <figure>
                            <img src={articles[0].image} className="w-100 " alt={articles[0].title} />
                        </figure>
                        <div className="artical-body">
                            <h5 className="artical-title">{articles[0].title}</h5>
                            <p className="artical-text">{articles[0].smallDescription}</p>
                            <p className="artical-text"><small className="">{articles[0].author} - {articles[0].date}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-3">
                {articles.slice(1).map(article => (
                    <div key={article.id} className='col-md-6'>
                        <div className="artical shadow d-flex align-items-center p-3 rounded-3  mb-4">
                            <img src={article.image} className="w-100 " alt={article.title} />
                            <div className="artical-body">
                                <h5 className="artical-title">{article.title}</h5>
                                <p className="artical-text">{article.smallDescription}</p>
                                <p className="artical-text"><small className="text-muted">{article.author} - {article.date}</small></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Articles;