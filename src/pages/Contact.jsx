import React, { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// For now, just simulate submission
		setSubmitted(true);
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<div className="contact-page">
			<h1>Contact Us</h1>
			<p>
				Have questions or feedback? We'd love to hear from you! Reach out to us
				via the form below or email at{" "}
				<a href="mailto:support@newshub.com">support@newshub.com</a>.
			</p>

			{submitted && (
				<div className="success-message">
					Thank you for reaching out! We'll get back to you soon.
				</div>
			)}

			<form className="contact-form" onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					placeholder="Your name"
				/>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					placeholder="your.email@example.com"
				/>

				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
					placeholder="Your message"
					rows={5}
				/>

				<button type="submit">Send Message</button>
			</form>
		</div>
	);
}
