import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const DownloadArticle = ({ blog }) => {
  return (
    <Document>
      <Page size="A4" orientation="portrait" style={styles.page}>
        <View style={styles.headingContainer}>
          <Image style={styles.image} src="/logos.jpg" />

          <Text style={styles.title}>{blog?.one.title}</Text>
          <Text style={styles.datetitle}>{blog?.date}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentText}>{blog?.one.content}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentHeading} break>
            {blog?.two.title}
          </Text>
          <Text style={styles.contentText}>{blog?.two.content}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentHeading} break>
            {blog?.two.title}
          </Text>
          <Text style={styles.contentText}>{blog?.three.content}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentHeading} break>
            {blog?.two.title}
          </Text>
          <Text style={styles.contentText}>{blog?.four.content}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentHeading} break>
            {blog?.two.title}
          </Text>
          <Text style={styles.contentText}>{blog?.five.content}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentHeading} break>
            {blog?.two.title}
          </Text>
          <Text style={styles.contentText}>{blog?.six.content}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentHeading} break>
            {blog?.two.title}
          </Text>
          <Text style={styles.contentText}>{blog?.seven.content}</Text>
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 20,
    paddingTop: 50,
  },
  headingContainer: {
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    marginTop: 40,
  },
  datetitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  image: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  content: {},
  contentHeading: {
    fontSize: 14,
    marginBottom: 15,
    textTransform: "uppercase",
  },

  contentText: {
    fontSize: 12,
    marginBottom: 20,
    lineHeight: 2,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default DownloadArticle;
