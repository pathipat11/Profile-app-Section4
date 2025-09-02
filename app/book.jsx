import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "../context/ThemeContext";

const Book = () => {
    const [data, setData] = useState([]);
    const { color } = useTheme();

    const bookData = async () => {
        try {
            const response = await fetch("http://10.30.5.84:3000/api/books?page=1&limit=10");
            const result = await response.json();
            // console.log("Book data fetched successfully:", result.books);
            console.log("Book data fetched successfully");
            setData(result.books);
        } catch (error) {
            console.error("Error fetching book data:", error);
        }
    };

    useEffect(() => {
        console.log("Book component mounted");
        bookData();
    }, []);

    return (
        <ScrollView style={[styles.container, { backgroundColor: color.background }]} showsVerticalScrollIndicator={false}>
            {data.length > 0 ? (
                data.map((book, index) => (
                    <View key={index} style={[styles.card, { backgroundColor: color.surface, borderLeftColor: color.primary }]}>
                        <Text style={[styles.title, { color: color.primary }]}>{book.title}</Text>
                        <Text style={[styles.text, { color: color.textSecondary }]}><Text style={styles.label}>Author:</Text> {book.author}</Text>
                        <Text style={[styles.text, { color: color.textSecondary }]}><Text style={styles.label}>Genre:</Text> {book.genre}</Text>
                        <Text style={[styles.text, { color: color.textSecondary }]}><Text style={styles.label}>Year:</Text> {book.year}</Text>
                        <Text style={[styles.text, { color: color.textSecondary }]}><Text style={styles.label}>Price:</Text> ${book.price}</Text>
                        <Text style={[styles.text, { color: color.textSecondary }]}>
                            <Text style={styles.label}>Available:</Text>{" "}
                            <Text style={{ color: book.available ? "#28a745" : "#dc3545" }}>
                                {book.available ? "✅ Yes" : "❌ No"}
                            </Text>
                        </Text>
                        <Text style={[styles.text, { color: color.textSecondary }]}>
                            <Text style={styles.label}>Added By:</Text> {book.addedBy?.username}
                        </Text>
                    </View>
                ))
            ) : (
                <Text style={styles.noData}>No books found.</Text>
            )}
        </ScrollView>
    );
};

export default Book;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f4f8",
        padding: 20,
    },
    card: {
        marginBottom: 20,
        padding: 18,
        borderRadius: 12,
        backgroundColor: "#ffffff",
        borderLeftWidth: 5,
        borderLeftColor: "#4a90e2",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#7639a8ff",
    },
    text: {
        fontSize: 14,
        marginBottom: 6,
        color: "#34495e",
    },
    label: {
        fontWeight: "600",
        color: "#2f80ed",
    },
    noData: {
        textAlign: "center",
        fontSize: 16,
        marginTop: 40,
        color: "#888",
    },
});
