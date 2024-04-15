
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">ABOUT</Typography>
                <Text variant="h5">Welcome to [Your Website Name], your go-to destination for insightful and engaging blog content. We're passionate about creating a platform where ideas, stories, and opinions can be shared, discussed, and celebrated.

At NODEFARM, we believe in the power of words to inspire, inform, and connect people from all walks of life. Whether you're a seasoned writer, a budding blogger, or simply someone who loves to read and explore new perspectives, you'll find something to spark your interest here.
<br/>
Our diverse community of writers covers a wide range of topics, including:
<br/>
Lifestyle: From travel and fashion to health and wellness, our lifestyle bloggers offer practical tips, personal anecdotes, and inspiring stories to help you live your best life.
Technology: Stay up-to-date with the latest trends, innovations, and developments in the ever-evolving world of technology. Our tech enthusiasts share expert insights, reviews, and tutorials to keep you informed.
Food and Drink: Indulge your culinary curiosity with mouthwatering recipes, restaurant reviews, and foodie adventures from our passionate food bloggers.
Arts and Culture: Explore the creative side of life with thought-provoking discussions, artist spotlights, and cultural explorations that celebrate diversity and creativity.
Personal Growth: Dive into the realms of self-improvement, mindfulness, and personal development as our writers share their journeys, challenges, and insights to help you grow and thrive.
But NODEFARM is more than just a platform for sharing content – it's a community where ideas are exchanged, connections are made, and voices are heard. We encourage lively discussions, respectful debates, and constructive feedback because we believe that dialogue is the cornerstone of progress and understanding.
<br/>
So whether you're here to read, write, or engage with others, we invite you to join us on this journey of discovery, inspiration, and connection. Together, let's explore the endless possibilities of storytelling and make our voices heard.
<br/>
Welcome to NODEFARM. Let's start writing the next chapter together.

                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    Email 
                        <Link href="mailto:kumararyan5214@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;