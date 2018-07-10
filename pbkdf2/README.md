## For OpenFaaS

Set URL to OPENFAAS_URL such as `http://127.0.0.1:31112` for minikube.

```
faas template pull https://github.com/openfaas-incubator/node8-express-template
faas new --lang node8-express pbkdf2 --prefix=alexellis2

faas build -f pbkdf2.yml
faas push -f pbkdf2.yml

faas deploy -f pbkdf2.yml
```

The function will be available at: http://$OPENFAAS_URL/function/pbkdf2
