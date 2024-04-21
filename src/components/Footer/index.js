import { Link } from "react-router-dom";
import {
    FooterArea,
    FooterBox,
    FooterContent,
    Awarded,
    FooterLink,
    FooterIcon
} from "./styled";

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
    <FooterArea>
        <FooterBox>
            {creator && (
                <FooterContent>
                    wykonawca: <Awarded>
                        <FooterLink to="/autor" title="Przejdź do podstrony O autorze" as={Link}>
                            {creator}
                        </FooterLink>
                    </Awarded>
                </FooterContent>
            )}
            {designer && (
                <FooterContent>
                    projektant: <Awarded>
                        {designer}
                    </Awarded>
                </FooterContent>
            )}
            {(copyright && year) && (
                <FooterContent>
                    {copyright} <Awarded>
                        &copy; {year}
                    </Awarded>
                </FooterContent>
            )}
        </FooterBox>
        <FooterBox alignment>
            {(socialLink && socialName && socialIcon) && (
                <FooterLink
                    href={socialLink}
                    target="_blank"
                    title={socialName}
                    rel="noreferrer"
                >
                    {socialName}
                    <FooterIcon className={socialIcon} />
                </FooterLink>
            )}
            {email && (
                <FooterLink
                    marginTop
                    href={`mailto:${email}`}
                    title={`Napisz do: ${email}`}
                >
                    {email}
                </FooterLink>
            )}
        </FooterBox>
    </FooterArea>
);

export default Footer;
