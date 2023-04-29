rules_version = '2';
 match /databases/{database}/documents {
  service cloud.firestore {
   match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2023, 5, 25);
    }
  }
}