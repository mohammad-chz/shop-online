import "./newsLetter.css"
export default function NewsLetter(){
    return(
        <div className="news-letter">
            <h1>پیشنهاد های جذاب را در ایمیل خود دریافت کنید</h1>
            <p>به ما ملحق شود تا از تخفیف های ویژه جا نمونید!</p>
            <form action="">
                <input type="email" placeholder="ایمیل خود را وارد کنید"/>
                <button>ارسال</button>
            </form>
        </div>
    )
}