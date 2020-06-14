//
//  ViewController.swift
//  MyTodoList
//
//  Created by quminseok on 2020/06/15.
//  Copyright © 2020 COMP420. All rights reserved.
//
import RealmSwift
import UIKit
class ToDoListItem: Object {
    @objc dynamic var item: String = ""
    @objc dynamic var data: Data = Data ()
    
}
class ViewController: UIViewController , UITableViewDelegate, UITableViewDataSource{
    
    @IBOutlet var table: UITableView!
    private var data = [ToDoListItem]()
    override func viewDidLoad() {
        super.viewDidLoad()
        
        table.register(UITableViewCell.self, forCellReuseIdentifier: "cell")
        table.delegate=self
        table.dataSource=self
    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return data.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell",for: indexPath)
        cell.textLabel?.text = data[indexPath.row].item
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: <#T##IndexPath#>, animated: true)
        
        
    }

}

