const Footer = ({
    creator,
    designer,
    copyright,
    year,
    socialLink,
    socialName,
    socialIcon,
    email
}) => (
    <footer className="footer">
        <div className="footer__left-side">
            {creator && (
                <p className="footer__content">
                    wykonawca: <span className="footer__highlighted">
                        {creator}
                    </span>
                </p>
            )}
            {designer && (
                <p className="footer__content">
                    projektant: <span className="footer__highlighted">
                        {designer}
                    </span>
                </p>
            )}
            {copyright && year && (
                <p className="footer__content">
                    {copyright} <span className="footer__highlighted">
                        &copy;{year}
                    </span>
                </p>
            )}
        </div>
        <div className="footer__right-side">
            {socialLink && socialName && socialIcon && (
                <a
                    href={socialLink}
                    className="footer__link"
                    target="_blank"
                    title={socialName}
                >
                    {socialName}
                    <i className={`footer__icon ${socialIcon}`}></i>
                </a>
            )}
            {email && (
                <a
                    href={`mailto:${email}`}
                    className="footer__link"
                    title={`Napisz do: ${email}`}
                >
                    {email}
                </a>
            )}
        </div>
    </footer>
);

export default Footer;
