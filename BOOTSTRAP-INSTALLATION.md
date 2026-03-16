# Bootstrap Installation Guide

This project currently does not have a package manager or web files. To use Bootstrap, you can either:

## 1. Use Bootstrap via CDN
Add the following lines to the `<head>` of your HTML file:

```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

## 2. Install Bootstrap via npm (for Node.js projects)
If you plan to use npm, run:

```
npm install bootstrap
```

Then import Bootstrap in your JavaScript or CSS:

```
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
```

---

If you need a specific setup (npm, CDN, or another), let me know and I can configure it for you.