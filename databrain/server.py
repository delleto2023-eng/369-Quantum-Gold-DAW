"""369 Data Brain server: TabPFN predictions for Big Tony. Port 3691.
Run:  pip install -r requirements.txt   then   python server.py
If TabPFN can't load, it falls back to scikit-learn so it always answers."""
import os
from flask import Flask, request, jsonify
import pandas as pd
app = Flask(__name__)
ENGINE = "tabpfn"
try:
    from tabpfn import TabPFNClassifier, TabPFNRegressor
except Exception:
    ENGINE = "sklearn-randomforest"
    from sklearn.ensemble import RandomForestClassifier as TabPFNClassifier, RandomForestRegressor as TabPFNRegressor

@app.after_request
def cors(r):
    r.headers["Access-Control-Allow-Origin"] = "*"
    r.headers["Access-Control-Allow-Headers"] = "content-type"
    return r

@app.get("/health")
def health():
    return jsonify(ok=True, engine=ENGINE)

@app.route("/predict", methods=["POST", "OPTIONS"])
def predict():
    if request.method == "OPTIONS":
        return ""
    d = request.get_json(force=True)
    df = pd.DataFrame(d["rows"], columns=d["columns"]).replace("", None)
    t = d["target"]
    train, test = df[df[t].notna()], df[df[t].isna()]
    X = pd.get_dummies(df.drop(columns=[t]).apply(pd.to_numeric, errors="ignore")).fillna(0).astype(float)
    Xtr, Xte = X.loc[train.index], X.loc[test.index]
    y = pd.to_numeric(train[t], errors="coerce")
    if y.notna().all():
        m = TabPFNRegressor(); m.fit(Xtr, y); p = [round(float(v), 2) for v in m.predict(Xte)]
    else:
        m = TabPFNClassifier(); m.fit(Xtr, train[t]); p = [str(v) for v in m.predict(Xte)]
    return jsonify(predictions=p, engine=ENGINE)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 3691)))
