<!DOCTYPE html>
<html class="h-full bg-grey-lighter">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link rel="preload" as="style" href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' onload="this.rel='stylesheet'">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    <script src="{{ mix('/js/app.js') }}" defer></script>
    @routes
</head>
<body class="font-sans leading-none text-grey-darkest antialiased">

@inertia

</body>
</html>
