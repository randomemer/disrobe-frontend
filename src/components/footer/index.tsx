import { INSTA_URL } from "@/modules/utils/config";
import { PlainLink } from "@/styles/shared";
import {
  FacebookRounded,
  Instagram,
  MailOutline,
  Twitter,
} from "@mui/icons-material";
import { ListItemIcon, ListItemText } from "@mui/material";
import { Linkedin, PhoneOutline } from "mdi-material-ui";
import {
  ContactListItem,
  Contacts,
  Copyright,
  DisrobeLogo,
  FooterColTitle,
  FooterColumn,
  FooterColumnLogo,
  FooterGrid,
  QuickLink,
  QuickLinks,
  SocialLink,
  Socials,
  StyledFooter,
} from "./styles";

export default function Footer() {
  return (
    <StyledFooter>
      <FooterGrid>
        <FooterColumnLogo>
          <DisrobeLogo href={"/"}>Disrobe</DisrobeLogo>

          <Socials>
            <SocialLink href={"/"} rel="noopener">
              <FacebookRounded />
            </SocialLink>
            <SocialLink target="_blank" href={INSTA_URL} rel="noopener">
              <Instagram />
            </SocialLink>
            <SocialLink href={"/"} rel="noopener">
              <Twitter />
            </SocialLink>
            <SocialLink href={"/"} rel="noopener">
              <Linkedin />
            </SocialLink>
          </Socials>

          <Copyright>
            Copyright &copy; Disrobe {new Date().getFullYear()}, All rights
            reserved.
          </Copyright>
        </FooterColumnLogo>

        <FooterColumn>
          <FooterColTitle>Contact Us</FooterColTitle>

          <Contacts dense disablePadding>
            {/* <ContactListItem
              disableGutters
              component={PlainLink}
              href={"phone:+919962606241"}
            >
              <ListItemIcon>
                <PhoneOutline />
              </ListItemIcon>
              <ListItemText>+91 99626 06241</ListItemText>
            </ContactListItem>

            <ContactListItem
              disableGutters
              component={PlainLink}
              href={"phone:+919962606241"}
            >
              <ListItemIcon>
                <PhoneOutline />
              </ListItemIcon>
              <ListItemText>+91 95000 62931</ListItemText>
            </ContactListItem> */}

            <ContactListItem
              disableGutters
              component={PlainLink}
              href={"mailto:contact@disrobeworld.com"}
            >
              <ListItemIcon>
                <MailOutline />
              </ListItemIcon>
              <ListItemText>contact@disrobeworld.com</ListItemText>
            </ContactListItem>
          </Contacts>
        </FooterColumn>

        <FooterColumn>
          <FooterColTitle>Quick Links</FooterColTitle>

          <QuickLinks>
            <QuickLink disableGutters href="/" component={PlainLink}>
              Home
            </QuickLink>
            <QuickLink disableGutters href="/about" component={PlainLink}>
              About
            </QuickLink>
          </QuickLinks>
        </FooterColumn>
      </FooterGrid>
    </StyledFooter>
  );
}
