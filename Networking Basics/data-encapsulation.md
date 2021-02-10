# What is Data Encapsulation?

#### Data Encapsulation
[source](https://networkencyclopedia.com/encapsulation/#:~:text=What%20is%20Encapsulation%20(in%20networking,using%20another%20type%20of%20packet.)

- Generally, Encapsulation is a process by which a lower-layer protocol receives data from a higher-layer protocol and then places the data into the data portion of its frame.

- Thus, encapsulation is the process of enclosing one type of packet using another type of packet.

- Ethernet frame encapsulates IP packets, and IP packet encapsulates TCP packet(fragment) which then encapsulates the actual data being transmitted over the network.

- An Ethernet frame encapsulated in an `Asynchronous Transfer Mode (ATM)` frame for transmission over an ATM backbone.

#### Asynchronous Transfer Mode (ATM)

- ATM is a high-speed, broadband transmission data communication technology based on packet switching, which is used by telcos, long distance carriers, and campus-wide backbone networks to carry integrated data, voice, and video information.

- The two main benefits of ATM are its high transmission speeds and its flexible bandwidth-on-demand capability.

- ATM Network Example
![ATM model](https://networkencyclopedia.com/wp-content/uploads/2019/08/atm-network.jpg)


- Data unit for each OSI model layer

    1. Bit

    2. Frame

    3. Packet

    4. Fragment
