//
//  Communication.swift
//  Chess
//
//  Created by 김건호 on 2022/05/05.
//

import Foundation
import SocketIO

let manager = SocketManager(socketURL: URL(string: "http://localhost:3000/test")!, config: [.log(false) ,.compress, .forceWebsockets(true)])
class Communication {
    static let instance = Communication()
    var socket:SocketIOClient
    init () {
        self.socket = manager.defaultSocket
    }
    func connect() {
        self.socket = manager.defaultSocket
        self.socket.connect()
        self.socket.on(clientEvent: .connect) {data, ack in
            print("socket connected")
        }
    }
    func sendMessage(message:String) {
        self.socket.emit("message", message)
    }
    func disconnect() {
        self.socket.disconnect()
    }
}
