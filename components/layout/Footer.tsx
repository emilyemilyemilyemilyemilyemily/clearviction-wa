import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  Box,
  Container,
  Divider,
  Grid,
  Hidden,
  Link,
  Stack,
  SxProps,
  Typography,
} from '@mui/material';
import React from 'react';

import footerContent from '../../content/footer.ts';
import navItems from '../../content/navItems.ts';
import ImageContainer from './ImageContainer.tsx';

const sectionContainerStyles: SxProps = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: {
    xs: 'center',
    md: 'start',
  },
};

const sectionHeaderStyles: SxProps = {
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function Footer() {
  return (
    <Box
      id="footer"
      component="footer"
      color="primary"
      sx={{
        mt: 'auto',
        backgroundColor: 'primary.dark',
        color: 'primary.contrastText',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          textAlign: { xs: 'center', md: 'left' },
          padding: 2,
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
        }}
      >
        <Box sx={sectionContainerStyles}>
          <Hidden mdDown>
            <Box sx={sectionHeaderStyles}>
              <Typography variant="h4">Welcome!</Typography>
            </Box>
            <Box maxWidth="255px">
              <Typography variant="caption" paragraph>
                {footerContent.mission}
              </Typography>
              <Typography variant="caption" paragraph>
                {footerContent.address.name}
                <br />
                {footerContent.address.street}
                <br />
                {footerContent.address.city}
              </Typography>
            </Box>
          </Hidden>
        </Box>

        <Divider />

        <Box sx={sectionContainerStyles}>
          <Box sx={sectionHeaderStyles}>
            <Typography variant="h4">Links</Typography>
          </Box>
          <Grid container rowSpacing={{ xs: 0, md: 5 }} columnSpacing={5} maxWidth={430}>
            {navItems
              .filter(
                (item) => ['Get Started', 'Get Involved', 'About Us', 'Contact'].includes(item.text),
              )
              .map((item) => (
                <Grid key={item.text} item xs={12} md={6}>
                  <Link
                    href={item.href}
                    color="primary.contrastText"
                    underline="hover"
                    fontSize={18}
                    noWrap
                  >
                    <Box
                      display="flex"
                      sx={{
                        justifyContent: {
                          xs: 'center',
                          md: 'space-between',
                        },
                      }}
                    >
                      <Typography variant="subtitle2" margin="0">
                        {item.text}
                      </Typography>
                      <Hidden mdDown>
                        <ArrowRightIcon />
                      </Hidden>
                    </Box>
                  </Link>
                </Grid>
              ))}
          </Grid>
        </Box>

        <Divider />

        <Box sx={sectionContainerStyles}>
          <Box sx={sectionHeaderStyles}>
            <Typography variant="h4">Partnerships</Typography>
          </Box>
          <Stack
            width={{ xs: '90%', md: '100%' }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={3}
          >
            <Box>
              <ImageContainer
                alt=""
                src="/democracylab-logo.png"
                width={206}
                height={61}
                useImageDimensions
                style={{
                  width: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
            <Box>
              <ImageContainer
                alt=""
                src="/openseattle-logo.png"
                width={124}
                height={99}
                style={{
                  width: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Container>

      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          textAlign: 'center',
          padding: 2,
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Hidden mdUp>
          <Divider sx={{ borderBottom: '1px solid currentColor' }} />
          <Typography variant="caption" paragraph>
            {footerContent.address.name}
            <br />
            {footerContent.address.street}
            <br />
            {footerContent.address.city}
          </Typography>
        </Hidden>
        <Box textAlign="center">
          <Typography variant="caption" paragraph>
            {footerContent.warning}
          </Typography>

          <Typography variant="caption" paragraph>
            {footerContent.information}
          </Typography>
        </Box>
      </Container>

    </Box>
  );
}

export default Footer;
