{
    "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": "*",
                "Action": [
                    "s3:PutObject",
                    "s3:PutObjectAcl",
                    "s3:GetObject",
                    "s3:GetObjectAcl",
                    "s3:DeleteObject"
                ],
                "Resource": [
                    "arn:aws:s3:::writedynamodb",
                    "arn:aws:s3:::writedynamodb/*"
                ]
            }
 }
