// === React ===
import { useState } from "react";

// === Mantine ===
import {
  Box,
  Text,
  Title,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  Paper,
  useMantineTheme,
  Alert,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconSend,
  IconCheck,
  IconAlertCircle,
} from "@tabler/icons-react";

// === Components ===
import { ContentColumn } from "../molecules/ContentColumn";

// === Styles ===
import classes from "./Contact.module.css";

/**
 * Contact page component that displays contact information and a contact form
 */
export function Contact() {
  const theme = useMantineTheme();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  // Define the contact info interface
  interface ContactInfo {
    icon: React.ReactNode;
    title: string;
    value: string;
    link: string;
  }

  // Contact information
  const contactInfo: ContactInfo[] = [
    {
      icon: <IconMail size={24} />,
      title: "Email",
      value: "harrison.oest@example.com",
      link: "mailto:harrison.oest@example.com",
    },
    {
      icon: <IconBrandGithub size={24} />,
      title: "GitHub",
      value: "github.com/harrisonoest",
      link: "https://github.com/harrisonoest",
    },
    {
      icon: <IconBrandLinkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/harrisonoest",
      link: "https://linkedin.com/in/harrisonoest",
    },
  ];

  // Form for contact
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? "Name is required" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      subject: (value) =>
        value.trim().length < 2 ? "Subject is required" : null,
      message: (value) =>
        value.trim().length < 10 ? "Message is too short" : null,
    },
  });

  // Handle form submission
  const handleSubmit = (values: typeof form.values) => {
    setSubmitting(true);
    setError(false);

    // TODO: Replace with actual form submission logic
    // This is a simulation of form submission
    setTimeout(() => {
      // In a real application, you would send the form data to a server
      console.log("hhh Form submitted:", values);
      setSubmitting(false);
      setSubmitted(true);
      form.reset();
    }, 1500);
  };

  // Contact information card component
  const ContactCard = ({ info }: { info: ContactInfo }) => (
    <Paper p="md" radius="md" className={classes.contactCard}>
      <Group>
        <Box className={classes.iconContainer}>{info.icon}</Box>
        <Box>
          <Text fw={500} size="lg">
            {info.title}
          </Text>
          <Text
            component="a"
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.contactLink}
          >
            {info.value}
          </Text>
        </Box>
      </Group>
    </Paper>
  );

  return (
    <Box className={classes.container}>
      {/* Hero section */}
      <ContentColumn
        padding="60px"
        height="auto"
        minHeight="auto"
        textAlign="center"
        backgroundColor={theme.colors.tokyoBlue[2]}
      >
        <Title order={1} className={classes.pageTitle}>
          Get In Touch
        </Title>
        <Text size="lg" mt="md" mb="xl" maw="800px" mx="auto">
          Have a question or want to work together? Feel free to reach out!
        </Text>
      </ContentColumn>

      {/* Contact information section */}
      <ContentColumn
        padding="40px"
        height="auto"
        minHeight="auto"
        backgroundColor={theme.colors.tokyoBlue[2]}
      >
        <Box mb={40} className={classes.horizontalContactContainer}>
          {contactInfo.map((info, index) => (
            <ContactCard key={index} info={info} />
          ))}
        </Box>

        {/* Contact form */}
        <Paper p="xl" radius="md" className={classes.formContainer}>
          <Title order={2} mb="xl" ta="center">
            Send Me a Message
          </Title>

          {submitted ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Alert
                icon={<IconCheck size={16} />}
                title="Message Sent!"
                color="green"
                mb="md"
                style={{ textAlign: "center" }}
              >
                Thank you for your message. I'll get back to you as soon as
                possible.
              </Alert>
            </div>
          ) : error ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Alert
                icon={<IconAlertCircle size={16} />}
                title="Error"
                color="red"
                mb="md"
                style={{ textAlign: "center" }}
              >
                There was an error sending your message. Please try again later.
              </Alert>
            </div>
          ) : null}

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} mb="md">
              <TextInput
                label="Name"
                placeholder="Your name"
                required
                {...form.getInputProps("name")}
              />
              <TextInput
                label="Email"
                placeholder="your.email@example.com"
                required
                {...form.getInputProps("email")}
              />
            </SimpleGrid>

            <TextInput
              label="Subject"
              placeholder="What is this regarding?"
              required
              mb="md"
              {...form.getInputProps("subject")}
            />

            <Textarea
              label="Message"
              placeholder="Your message here..."
              minRows={5}
              required
              mb="xl"
              {...form.getInputProps("message")}
            />

            <Group justify="center">
              <Button
                type="submit"
                size="md"
                loading={submitting}
                leftSection={<IconSend size={18} />}
                color={theme.colors.tokyoBlue[5]}
              >
                Send Message
              </Button>
            </Group>
          </form>
        </Paper>
      </ContentColumn>
    </Box>
  );
}
