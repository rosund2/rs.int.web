(ns rs.int.web.db)

(defprotocol Db
  (find-rec [this id]))

(defprotocol RecordRepository
  (query [this id]))

(defrecord MysqlDB [host con]
  Db
  (find-rec [this id]
    {:user "test"}))

(defn new-mysqldb [host]
  (map->MysqlDB {:host host}))

(defrecord MongoDB [host con]
  Db
  (find-rec [this id]
    {:user "mongodb"}))

(defn new-mongodb [host]
  (map->MongoDB {:host host}))

(defrecord UserRepository [db]
  RecordRepository
  (query [this id]
    (find-rec db id)))

(defn new-userepository []
  (map->UserRepository {}))

