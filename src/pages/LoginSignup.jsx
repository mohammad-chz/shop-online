import React, { useState } from "react";
import "./css/loginSighnup.css";

export default function LoginSignup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isChecked) {
            setError('لطفا با قوانین و مقررات موافقت کنید');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('پسورد شبیه هم نیست');
            return;
        }


    };

    return (
        <div className="login-signup">
            <div className="context-login-signup">
                <div className="signup-top">
                    <h2>ثبت نام</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">نام کاربری: </label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="نام کاربری" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">ایمیل: </label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="ایمیل" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">پسورد: </label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="رمز عبور" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">تکرار پسورد: </label>
                        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="تکرار رمز عبور" />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button type="submit">ثبت نام</button>
                    <p>آیا قبلا اکانت داشته اید؟ <span className="agree-provision">ورود</span></p>
                    <label>
                        <input type="checkbox" onChange={() => setIsChecked(!isChecked)} checked={isChecked} />
                        <span>با قوانین و مقررات موافق هستم</span>
                    </label>
                </form>
            </div>
        </div>
    );
}
