for (let i = 0; i <= questions.length; i++) {
  questions["usersAnswer"] = null;
}

---
OR 
---

const result = questions.forEach(function(item) {item.usersAnswer = null});