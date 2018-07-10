## For OpenFaaS

### Deploy OpenFaaS on EKS

Follow these instructions up to the heading "Manage OpenFaaS functions with kubectl" - this deploys to EKS, but you can also follow guides for GKE, AKS or similar managed-Kubernetes services via https://docs.openfaas.com/

https://github.com/stefanprodan/openfaas-flux/blob/master/openfaas-operator.md

You will now have a gateway URL set as the `OPENFAAS_URL` env-var.

### Build/deploy the function

Set URL to OPENFAAS_URL such as `http://127.0.0.1:31112` for minikube.

```
faas template pull https://github.com/openfaas-incubator/node8-express-template
faas new --lang node8-express pbkdf2 --prefix=alexellis2

faas build -f pbkdf2.yml
faas push -f pbkdf2.yml

faas deploy -f pbkdf2.yml
```

The function will be available at: http://$OPENFAAS_URL/function/pbkdf2

Example:

```
echo -n hash | faas invoke pbkdf2
```
