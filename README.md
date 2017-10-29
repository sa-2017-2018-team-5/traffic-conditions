# Traffic conditions

[![Build status](https://travis-ci.org/sa-2017-2018-team-5/priority-rules-system.svg?branch=master)](https://travis-ci.org/sa-2017-2018-team-5/traffic-conditions)

Project of Software Architecture @ Polytech Nice

## Purpose

> Mock of an external service giving information on the states of the traffic. 

## Authors

- Antoine AUBÉ 
([aube.antoine@protonmail.com](mailto:aube.antoine@protonmail.com))

- Danial Aswad BIN AHMAD FAZLAN 
([azswad20@gmail.com](mailto:azswad20@gmail.com))

- Anthonny GIROUD
([giroud.anthonny@gmail.com](mailto:giroud.anthonny@gmail.com))

- Khadim GNING
([khadim.gning@yahoo.fr](mailto:khadim.gning@yahoo.fr))

### Functionality so far

For now we have a simple nodejs rest server. 
This server can be launched by entering the following command at the root of the project:
<pre><code>node app.js</code></pre>

The server is listening to the port 9090 by default.

The first version of our server only accept a Get request with an id as a parameter and 
answer with a traffic status corresponding to this id (free if the id is even, jam otherwise).

### Example of GET request and corresponding answer

<pre>
  <code>
    //Request URL
    http://localhost:9090/traffic-api/road?section=2
    endpoint
    // JSON response
    {
      "road_id": "2",
      "status": "FREE"
    }
  </code>
</pre>

