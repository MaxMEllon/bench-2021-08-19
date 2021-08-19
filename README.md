```bash
$ node --prof index.js
$ node --prof-process --preprocess -j isolate-*.log | flamebearer
$ node --prof-process isolate-*.log > results.txt
```
