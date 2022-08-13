# Portfolio

A simple portfolio built using React and Material UI. This uses a CI/CD pipeline using Github actions to deploy latest changes to AWS S3. Static hoisting is enabled on S3 bucket which is then connected with Cloudfront to create a https enabled URL.

## HLD

![Portfolio](https://user-images.githubusercontent.com/20270023/184501247-3c99458b-afd5-4bed-8b99-c928c0f3bfe0.png)

## Preview

![Portfolio](https://user-images.githubusercontent.com/20270023/184499369-1616e2ba-f89d-4d01-bc64-04f3397452da.gif)

## Demo

[See Live](https://d249pdcbz94ezu.cloudfront.net/)

## Steps for setting CI/CD with Github Actions and AWS S3

Create a IAM user with role `S3:FullAccess` and save the access key id, secret in github repository settings.

Create S3 bucket and enable all public access and ACL.
Add a bucket policy.

```
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "PublicReadGetObject",
			"Effect": "Allow",
			"Principal": "*",
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::portfolio.tarun.com/*"
		}
	]
}
```

Enable S3 static hoisting and add `index.html` as base url

When creating cloudfront distribution make sure to add default root object as `index.html` otherwise you might get 403 error.
