# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_22_161929) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "additions", force: :cascade do |t|
    t.decimal "mass_added"
    t.decimal "location_from_bottom"
    t.string "location_from_sym_axis"
    t.decimal "swingweight_added"
    t.decimal "balance_transfer"
    t.bigint "customization_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "twistweight_added"
    t.boolean "activated?"
    t.index ["customization_id"], name: "index_additions_on_customization_id"
  end

  create_table "brands", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "customizations", force: :cascade do |t|
    t.decimal "initial_weight"
    t.decimal "current_weight"
    t.decimal "initial_balance"
    t.decimal "current_balance"
    t.decimal "initial_swingweight"
    t.decimal "current_swingweight"
    t.text "comment"
    t.string "player_racquet_code"
    t.bigint "racquet_id"
    t.bigint "player_id"
    t.bigint "customizer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["customizer_id"], name: "index_customizations_on_customizer_id"
    t.index ["player_id"], name: "index_customizations_on_player_id"
    t.index ["racquet_id"], name: "index_customizations_on_racquet_id"
  end

  create_table "racquets", force: :cascade do |t|
    t.bigint "brand_id"
    t.string "trade_name"
    t.decimal "reference_weight"
    t.decimal "reference_balance"
    t.decimal "reference_swingweight"
    t.decimal "length"
    t.integer "stiffness"
    t.integer "string_pattern_mains"
    t.integer "string_pattern_crosses"
    t.integer "head_size_cm2"
    t.integer "head_size_in2"
    t.string "composition"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_id"], name: "index_racquets_on_brand_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "ranking"
    t.string "gender"
    t.boolean "customizer?", default: false
    t.boolean "premium?", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "additions", "customizations"
  add_foreign_key "customizations", "racquets"
  add_foreign_key "customizations", "users", column: "customizer_id"
  add_foreign_key "customizations", "users", column: "player_id"
  add_foreign_key "racquets", "brands"
end
